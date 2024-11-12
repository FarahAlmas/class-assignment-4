import Feature from "@/components/feature/Feature";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import PostCard from "../components/postCard/PostCard";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return(
    <div>
    <Header/>
    <Hero/>
    <PostCard/>
    <Feature/>
    <Footer/>
</div> 
  )
}