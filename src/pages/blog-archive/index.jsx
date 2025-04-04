import Blog from '@/components/display-blog';
import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
const BlogDisplay = () => {
   const blogData = {
      tittle: "Blog",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, velit?",
   }
  return (
     <div>
      <Header/>
      <Hero {...blogData}/>
        <Blog/>
        <Footer/>
     </div>
  );
};

export default BlogDisplay;
