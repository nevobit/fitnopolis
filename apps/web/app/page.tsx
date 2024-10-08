import Image from "next/image";
import styles from "./Home.module.css"
import { helebba } from "../utils";
import Link from "next/link";
import FeaturedProducts from "./_components/FeaturedProducts";

const Home: React.FC = async() => {
  const categories = await helebba.listCategories();

  return (
    <>
    <section className={styles.section} >
      <div className={styles.bg} >
        <div>
          <video className={styles.video} poster="https://global.bowflex.com/on/demandware.static/-/Sites-nautilus-international-Library/default/dw1e7c91e7/bfx/homepage/posters/bowflex-hp-rebrand-launch-1920x800-poster-d.jpg" autoPlay={true} loop={true} muted playsInline tabIndex={0}>
            <source src="https://download.bowflex.com/video/bfx/june23/bowflex-hp-rebrand-launch-1920x800.mp4" type="video/mp4" />
          </video>
          <video className={styles.video_mobile} poster="https://global.bowflex.com/on/demandware.static/-/Sites-nautilus-international-Library/default/dwadc9d996/bfx/homepage/posters/bowflex-hp-rebrand-launch-428x613-poster-m.jpg" autoPlay={true} loop={true} muted playsInline tabIndex={0} >
            <source src="https://download.bowflex.com/video/bfx/june23/bowflex-hp-rebrand-launch-428x613.mp4" type="video/mp4" />
          </video>
        </div>
          <div className={styles.copy} >
        <h1>Fomenta tu amor por el movimiento</h1>
        <p>El fitness debe sentirse bien</p>
        </div>
      </div>
    
      </section>
          
    <section className={styles.categories_section}>
        <h2 className={styles.subtitle} >Todos tienen su favorito. Explora nuestras categorías.</h2>

        <div className={styles.categories}>
          {categories.items.reverse().map(category => (
            <Link key={category.id} href={`/categorias/${category.name.toLowerCase()}`} >
              <Image src={category.image} alt={"Categoria " + category.name} width={120} height={120} />
              <h3>{ category.name}</h3>
          </Link>
          ))}
          
        </div>
      </section>

      <FeaturedProducts />

    
      
      <section className={styles.section_social} >
        <h2 className={styles.subtitle} >Únete al movimiento.</h2>
        <p>Esfuérzate. Da tu máximo. Quema como nunca. Suda como nunca. Mira a todos dándolo todo con Fitnopolis</p>
        

        <div className={styles.images} >
            <Image src='https://cdn-yotpo-images-production.yotpo.com/instagram/91/18120231388237991/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/32/17858890853476932/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/39/17964990517358839/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/72/18006797669277572/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/42/17967705011307542/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/26/17883258296011126/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/3/17922576142712003/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
            <Image  src='https://cdn-yotpo-images-production.yotpo.com/instagram/97/17864415314488897/low_resolution.jpg' width={150} height={150} alt="Fitnopolis" />
        </div>
      </section>
    </>

  );
}


export default Home;