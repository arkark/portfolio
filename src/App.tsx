import Profile from "@/components/Profile";
import Background from "@/components/Background";

const App: React.FC = () => {
  const contentSize = 128;
  return (
    <>
      <Background
        contentSize={contentSize}
        className="w-screen h-screen fixed z-[-1]"
      ></Background>
      <div className="mx-auto max-w-4xl p-6">
        <div className="card bg-base-100/80">
          <div className="card-body p-10">
            <Profile></Profile>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
