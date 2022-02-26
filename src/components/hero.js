function Hero({ text, image, height }) {
  const style = {
    backgroundImage: "url(" + image + ")",
    height: height,
  };

  return (
    <div className="hero" style={style}>
      <h1 className="hero-text">{text}</h1>
    </div>
  );
}

export default Hero;
