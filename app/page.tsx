import NavigationBar from "@/components/nav-bar";
import {Button, ButtonGroup} from "@nextui-org/button";
import Background from "@/components/background";
import sty from "../styles/home.module.css"
export default function Home() {
  return (
    <>
      <NavigationBar />
    <div className={sty.container}>
      <h2 className={sty.secondaryTitle}>
      NÓS TE AJUDAMOS A <span className={sty.span}> CONQUISTAR O RANK  </span> 
      </h2>
      <h1 className={sty.primaryTitle}>
        QUE VOCÊ <span className={sty.span}> MERECE! </span>
      </h1>
      <Button radius="full" size="lg" variant="solid" color="primary" > NOSSOS SERVIÇOS </Button>
    </div>
    <Background />
      
    </>
  );
}
