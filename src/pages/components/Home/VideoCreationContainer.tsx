const styles: { [key: string]: string } = {
  mainDiv: 'w-full flex flex-col items-start justify-center text-left text-2xl text-black font-poppins gap-2',

  title: 'relative text-[2rem] font-semibold contents ' + 'md:text-2xl ' + 'sm:text-xs',

  contentDiv: 'flex flex-col pl-10 gap-1 text-2xl lg:text-xl lg:pl-8' + 'md:text-base md:pl-7 ' + 'sm:text-xs sm:pl-4',

  firstLineDiv: 'flex flex-row flex-wrap items-center gap-1',

  addImg: 'relative px-1',

  translateButton: 'rounded-1.5lg bg-gray-300 py-2.5 px-5 font-bold text-base-white',
}

const VideoCreationContainer: React.FC = () => {
  return (
    <div className={`VideoCreationContainer/mainDiv ${styles['mainDiv']}`}>
      <p className={`VideoCreationContainer/title ${styles['title']}`}>Pour créer une vidéo, rien de plus simple !</p>
      <div className={`VideoCreationContainer/contentDiv ${styles['contentDiv']}`}>
        <ol type='1'>
          <div className={`VideoCreationContainer/firstLineDiv ${styles['firstLineDiv']}`}>
            <li>Appuies sur</li>
            <img
              className={`VideoCreationContainer/addImg ${styles['addImg']}`}
              alt=''
              src='/icon/full/add.png'
            />
            <p>puis sélectionnes “Vidéo à créer”</p>
          </div>
          <li>Choisis une œuvre à traduire</li>
          <li>Te voilà prêt à débuter ta création !</li>
        </ol>
      </div>
      <button className={`VideoCreationContainer/translateButton ${styles['translateButton']}`}>
        + Traduire une oeuvre
      </button>
    </div>
  )
}

export default VideoCreationContainer
