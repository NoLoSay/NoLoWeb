import type { NextPage } from "next";

const styles: { [key: string]: string } = {
  container: "absolute top-[878px] left-[404px] w-[1205px] h-[707px] text-left text-5xl text-black font-poppins",
  image: "absolute rounded-81xl w-[150px] h-[150px] object-cover",
  name: "absolute leading-[65px] font-black inline-block w-[259px] h-[63px]",
  title: "absolute leading-[65px] font-black inline-block w-[259px] h-[63px]",

  person1: "top-[392px] left-[647px]",
  person2: "top-[129.5px] left-[646.98px]",
  person3: "top-[129px] left-[26px]",
  person4: "top-[129.5px] left-[335.98px]",
  person5: "top-[140.5px] left-[956.98px]",
  person6: "top-[392px] left-[26px]",
  person7: "top-[392px] left-[337px]",
  person8: "top-[392px] left-[966px]",

  name1: "top-[291px] left-[-1px]",
  name2: "top-[291px] left-[621px]",
  name3: "top-[291px] left-[912px]",
  name4: "top-[291px] left-[332px]",
  name5: "top-[554px] left-[-1px]",
  name6: "top-[554px] left-[305px]",
  name7: "top-[554px] left-[628px]",
  name8: "top-[554px] left-[945px]",
};
const Container: NextPage = () => {
    return (
      <div className={styles.container}>
          <img className={`${styles.image} ${styles.person1}`} alt="" src="/images/people/johan.png" />
          <img className={`${styles.image} ${styles.person2}`} alt="" src="/images/people/julien.png" />
          <img className={`${styles.image} ${styles.person3}`} alt="" src="/images/people/ugo.png" />
          <img className={`${styles.image} ${styles.person4}`} alt="" src="/images/people/aurele.png" />
          <img className={`${styles.image} ${styles.person5}`} alt="" src="/images/people/laborde.png" />
          <img className={`${styles.image} ${styles.person6}`} alt="" src="/images/people/tomasin.png" />
          <img className={`${styles.image} ${styles.person7}`} alt="" src="/images/people/quentin.png" />
          <img className={`${styles.image} ${styles.person8}`} alt="" src="/images/people/tom.png" />
          
          <div className={`${styles.title} ${styles.name1}`}>Ugo Boulestreau</div>
          <div className={`${styles.title} ${styles.name2}`}>Julien Lafargue</div>
          <div className={`${styles.title} ${styles.name3}`}>Alexandre Laborde</div>
          <div className={`${styles.title} ${styles.name4}`}>Aurele Nicolas</div>
          <div className={`${styles.title} ${styles.name5}`}>Alexandre Tomasin</div>
          <div className={`${styles.title} ${styles.name6}`}>Quentin Camilleri</div>
          <div className={`${styles.title} ${styles.name7}`}>Johan Chrillesen</div>
          <div className={`${styles.title} ${styles.name8}`}>Tom Duval-Mahe</div>
        </div>
    );
};

export default Container;
