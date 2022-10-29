import { useEffect, useRef } from "react";

function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    var c = ref.current;
    var $ = c.getContext("2d");

    var col = function (x: number, y: number, r: number, g: number, b: number) {
      if (!$) return;
      $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
      $.fillRect(x, y, 1, 1);
    };
    var R = function (x: number, y: number, t: number) {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    var G = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    var B = function (x: number, y: number, t: number) {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    var t = 0;

    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.03;
      window.requestAnimationFrame(run);
    };
    run();
  }, []);

  return (
    <div
      style={{
        clipPath: "polygon(100% 0, 100% 41%, 50% 68%, 0 100%, 0 0)",
        boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
        // backgroundImage:
        //   " -webkit-gradient(linear, left top, left bottom, from(rgba(50,50,50,0.8)), to(rgba(80,80,80,0.2)), color-stop(.5,#333333));",
      }}
      className="inset absolute top-0 -z-10 h-3/4 w-screen"
    >
      <canvas
        id="canv"
        width="32"
        height="32"
        ref={ref}
        className=" h-full w-screen"
      ></canvas>
    </div>
  );
}

export default Background;
