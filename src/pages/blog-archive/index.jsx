import Blog from './display-blog';
import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from './hero'
const BlogDisplay = () => {
  return (
     <div>
      <Header/>
      <Hero/>
        <Blog/>
        <Footer/>
     </div>
  );
};

export default BlogDisplay;
