import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import root, { alert, window } from "window-or-global";

const Home = (props) => {
  const [index, setIndex] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    (async () => {
      const res = await axios.post(
        `https://thaiflix.msp5382.vercel.app/api/load_index`,
        { page: 1 }
      );
      setIndex(res.data);
    })();
  }, []);

  useEffect(() => {
    const loadMore = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.scrollingElement.scrollHeight
      ) {
        (async () => {
          const res = await axios.post(
            `https://thaiflix.msp5382.vercel.app/api/load_index`,
            { page: page + 1 }
          );
          setIndex(index.concat(res.data));
          setPage(page + 1);
          console.log(index);
        })();
      }
    };
    window.addEventListener("scroll", loadMore);

    return () => {
      window.removeEventListener("scroll", loadMore);
    };
  }, [
    document.documentElement.scrollTop,
    document.scrollingElement.scrollHeight,
  ]);
  return (
    <div class="w-11/12 mx-auto pt-16 flex flex-wrap">
      {index.map(({ title, pic, href }) => (
        <div
          class="p-1 w-64 "
          onClick={() => {
            root.location = "/view/" + encodeURI(href);
          }}>
          <img src={pic} alt="" />
          <div>{title}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
