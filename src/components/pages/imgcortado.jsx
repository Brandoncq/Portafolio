function ImgCortado({ img }) {
  const styles = {
    imgTransform: {
      clipPath:
        "polygon(90% 92%, 100% 92%, 100% 33%, 90% 33%, 90% 0, 20% 0, 20% 14.5%, 62.5% 14.5%, 62.5% 54.5%, 20% 54.5%, 20% 57.5%, 53.5% 57.5%, 53.5% 91.5%, 20% 91.5%, 20% 100%, 90% 100%)",
    },
    imgTransform1: {
      clipPath: "polygon(5% 15%, 62% 15%, 62% 54%, 5% 54%)",
    },
    imgTransform2: {
      clipPath: "polygon(0% 58%, 53% 58%, 53% 91%, 0% 91%)",
    },
  };

  return (
    <div className="w-full relative flex">
      <img
        src={img}
        alt=""
        className="w-full h-auto opacity-0"
        loading="lazy"
      />
      <img
        src={img}
        alt=""
        className="w-full absolute"
        style={styles.imgTransform}
        loading="lazy"
      />
      <div className="w-full absolute"></div>
      <img
        src={img}
        alt=""
        className="w-full absolute"
        style={styles.imgTransform1}
        loading="lazy"
      />
      <img
        src={img}
        alt=""
        className="w-full absolute"
        style={styles.imgTransform2}
        loading="lazy"
      />
    </div>
  );
}

export default ImgCortado;
