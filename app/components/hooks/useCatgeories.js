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
    const image = post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url 
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


export default (categ, limite) => {
  const [alaUne, setalaUne] = useState([]);

  const loadData = async () => {
    try {
      const newClass = new clean();
    
      let query = "posts?per_page=" + limite + "&orderby=modified&_embed" + "&categories=" + categ
  
      const res = await sndirect.get(query);
      const data = await new newClass.CleanPosts(res.data);
  
   
        setalaUne(data)
   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    alaUne
  };
};
