import Layout from "./assets/layout/MainLayout"
import Seo from "./assets/components/SEO/SeoComponents"
const baseUrl = window.location.origin;
function App() {
  return (
    <>
    <Seo customImage ={`${baseUrl}/src/assets/Images/385438962_790771539643042_7852980290333862625_n.jpg`}/>
    <Layout/>
    </>
  )
}
export default App
