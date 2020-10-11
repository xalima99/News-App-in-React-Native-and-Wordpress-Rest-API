import sndirect from "../api/axios/sndirect";
import { useState, useEffect } from "react";

function SanitizedPost(post) {
  if (post) {
    const id = post.id;
    const title = post.title.rendered;
    const date = post.date.substring(0, 10);
    const description = post.content.rendered;
    const author = post._embedded.author[0].name;
    const categories = post.categories[0];
    const image = post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium
    .source_url
    return {
      id,
      title,
      date,
      description,
      author,
      image,
      categories
    };
  }
}

class clean {
  CleanPosts(posts) {
    const cleaned = [];
    posts.map(async (post) => {
      let okayPost = SanitizedPost(post);
      cleaned.push(okayPost);
    });

    return cleaned;
  }
}

const loadCategory = async (categor, limit = 8) => {
  try {
    const newClass = new clean();
    let query = `/posts?categories=${categor}&limit=${limit}`;
    const res = await sndirect.get(query);

    const category = new newClass.CleanPosts(res.data);
    return category;
  } catch (error) {
    console.log(error);
  }
};

const loadData = async (category , limit = 10, page) => {
  try {
    const newClass = new clean();

    let query = "posts?per_page=" + limit + "&orderby=modified&_embed" + (category ? "&categories=" + category : "");

    const res = await sndirect.get(query);
    const data = new newClass.CleanPosts(res.data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default () => {
  const [allposts, setallposts] = useState([]);
  const [alaUne, setalaUne] = useState([]);

  const loadData = async (category , limit = 10) => {
    try {
      const newClass = new clean();
    
      let query = "posts?per_page=" + limit + "&orderby=modified&_embed" + (category ? "&categories=" + category : "");
  
      const res = await sndirect.get(query);
      const data = new newClass.CleanPosts(res.data);
  
      if(category){
        setalaUne(data)
        return
      }
      setallposts(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData(null,20);
    loadData(15,10);
  }, []);

  return {
    allposts,
    alaUne
  };
};
