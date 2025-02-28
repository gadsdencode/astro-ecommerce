interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (
    <>
      <div className="col-12 col-lg-6 d-flex">
        <div className="d-block">
          <img className="w-90 max-height-150 mb-4 rounded-2" src="/public/images/oss-logo.png" alt={images[0].alt} />
          <img className="w-90 max-height-150 mb-4 rounded-2" src="/public/images/oss-logo.png" alt={images[1].alt} />
          <img className="w-90 max-height-150 mb-4 rounded-2" src="/public/images/oss-logo.png" alt={images[2].alt} />
          <img className="w-90 max-height-150 rounded-2" src="/public/images/oss-logo.png" alt={images[3].alt} />
        </div>
        <img className="w-70 rounded-2" src="/public/images/oss-logo.png" alt={images[0].alt} />
      </div> 
    </>
  );
}