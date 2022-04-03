// const YouTube = ({ videoId }) => {
//   return (
//     <div
//       className="video"
//       style={{
//         position: "relative",
//         paddingBottom: "56.25%" /* 16:9 */,
//         paddingTop: 25,
//       }}
//     >
//       <iframe
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%"
//         }}
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//       />
//     </div>
//   );
// };


const YouTube = ({ videoId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Noluverse Technologies"
    />
  </div>
);

export default YouTube;