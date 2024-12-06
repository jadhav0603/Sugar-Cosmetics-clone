import React from 'react';
import blog1 from '../images/pagesUnder/blog1.jpg'
import blog2 from '../images/pagesUnder/blog2.jpg'
import blog3 from '../images/pagesUnder/blog3.jpg'
import blog4 from '../images/pagesUnder/blog4.jpg'
import blog5 from '../images/pagesUnder/blog5.jpg'

function Blog() {

  const images =[
    blog1,blog2,blog3,blog4,blog5
  ]

  return (
    <div>
      {images.map((ele)=>(
        <img src={ele} alt='Blog_images'/>
      ))}
    </div>
  );
}

export default Blog;