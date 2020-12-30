import { useEffect, useState } from "preact/hooks";
import axios from "axios";

const View = (props) => {
  const [URL, setURL] = useState("");
  useEffect(() => {
    console.log(props.movie);
    (async () => {
      const res = await axios.post(
        `https://thaiflix.msp5382.vercel.app/api/get_video`,
        { movie: props.movie }
      );
      setURL(res.data.src);
    })();
  }, []);

  return (
    <div class="w-11/12 mx-auto pt-16 flex">
      <iframe
        src={URL}
        scrolling="no"
        frameborder="0"
        width="100%"
        height="1000px"
        allowfullscreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"></iframe>
    </div>
  );
};

export default View;
