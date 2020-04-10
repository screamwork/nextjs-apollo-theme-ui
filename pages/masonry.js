import { useWindowSize } from "@react-hook/window-size";
import React from "react";
import ReactModal from "react-modal";
import { Box, Heading, useThemeUI } from "theme-ui";
import { Layout } from "../components/Layout";

let brakePoints = [420, 728, 832];
let images = [];
const imgId = [1011, 883, 776, 823, 64, 65, 839, 314, 256, 316, 92, 643];
for (let i = 0; i < imgId.length; i++) {
  const ih = 200 + Math.floor(Math.random() * 10) * 15;
  images.push("https://unsplash.it/325/" + ih + "?image=" + imgId[i]);
}

export default () => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;

  return (
    <Layout>
      <Box
        pt={theme.space[7]}
        pb={theme.space[5]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ width: ["100%", "100%", "75%"] }}>
          <Heading
            as="h2"
            mb={`${theme.space[3]}px`}
            sx={{
              textAlign: "center",
            }}
          >
            ReactJS Responsive/Modular Masonry Grid.
          </Heading>
          <Masonry brakePoints={brakePoints}>
            {images.map((image, id) => {
              return <Tile src={image} key={id} />;
            })}
          </Masonry>
        </Box>
      </Box>
    </Layout>
  );
};

const Tile = ({ src }) => {
  const context = useThemeUI();
  const { theme, colorMode, setColorMode } = context;
  const [showModal, setShowModal] = React.useState(false);
  const [width, height] = useWindowSize();

  return (
    <div className="tile">
      <Box p={2}>
        <img src={src} onClick={() => setShowModal(true)} />
        <ReactModal
          ariaHideApp={false}
          isOpen={showModal}
          style={{
            overlay: {
              backgroundColor: "whitesmoke", //"papayawhip",
              zIndex: 999,
              top: `${theme.space[4]}px`,
              left: `${theme.space[4]}px`,
              right: `${theme.space[4]}px`,
              bottom: `${theme.space[4]}px`,
              boxShadow: "4px 10px 10px rgba(22,22,22,.25)",
            },
            content: {
              color: "black",
              padding: 0,
              border: "none",
              overflow: "hidden",
              backgroundColor: "inherit",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{ marginBottom: `${theme.space[1]}px` }}
            >
              Close Modal
            </button>
            <img
              src={`${src.replace(
                /325([^?].)*/g,
                `${width - 120}/${height - 130}`
              )}`}
              style={{
                maxWidth: "100%",
                backgroundSize: "contain",
              }}
            />
          </Box>
        </ReactModal>
      </Box>
      <style jsx>{`
        .tile img {
          box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.15);
          border-radius: 10px;
          width: 100%;
        }
        .tile img:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  getColumns(w) {
    return (
      this.props.brakePoints.reduceRight((p, c, i) => {
        return c < w ? p : i;
      }, this.props.brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return (
      <>
        <div className="masonry" ref="Masonry">
          {this.mapChildren().map((col, ci) => {
            return (
              <div className="column" key={ci}>
                {col.map((child, i) => {
                  return <div key={i}>{child}</div>;
                })}
              </div>
            );
          })}
        </div>
        <style jsx>{`
          .masonry {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: stretch;
            width: 100%;
            margin: auto;
          }
          .column {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: stretch;
            flex-grow: 1;
          }
        `}</style>
      </>
    );
  }
}
