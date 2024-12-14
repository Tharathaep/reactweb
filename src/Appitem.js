function ImageItem(props) {
    const { Pic, onPicClick } = props; 
  
    return (
      <div className="Image-item">
        <img 
          src={Pic.thumbnailUrl} 
          alt={Pic.title}
          onClick={() => onPicClick(Pic)}  
        />
        <h3>{Pic.title}</h3>
      </div>
    );
  }
  
  export default ImageItem;
  