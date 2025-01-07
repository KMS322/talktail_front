import "../../css/home.css";

const Home = () => {
  return (
    <div className="home">
      <video
        src="/video/home.mp4" // 비디오 파일 경로를 여기에 입력
        controls // 비디오 컨트롤 표시 (재생, 일시정지 등)
        autoPlay // 자동 재생
        loop // 반복 재생
        muted // 음소거 상태로 재생
      >
        Your browser does not support the video tag.
      </video>
      <div className="text_box">
        <p>CES BOOT LOCATION Eureka park K-startup 63432</p>
      </div>
    </div>
  );
};

export default Home;
