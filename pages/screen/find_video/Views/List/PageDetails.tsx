// pages/PageDetails.tsx
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const PageDetails: NextPage = () => {
  const router = useRouter();

  // Utilisez router.query pour accéder aux paramètres de requête
  const { title1, title2, description, imageSrc, videoCountPlaceholder } = router.query;

  // Vérifiez si la valeur est un tableau et prenez la première valeur
  const getTitle1 = Array.isArray(title1) ? title1[0] : title1;
  const getTitle2 = Array.isArray(title2) ? title2[0] : title2;
  const getDescription = Array.isArray(description) ? description[0] : description;
  const getImageSrc = Array.isArray(imageSrc) ? imageSrc[0] : imageSrc;
  const getVideoCountPlaceholder = Array.isArray(videoCountPlaceholder) ? videoCountPlaceholder[0] : videoCountPlaceholder;

  return (
    <div>
      <h1>{getTitle1}</h1>
      <h2>{getTitle2}</h2>
      <p>{getDescription}</p>
      <img src={getImageSrc} alt="" />
      <p>{getVideoCountPlaceholder}</p>
    </div>
  );
};

export default PageDetails;
