export default function Footer() {
  const getFullYear = new Date().getFullYear();
  return (
    <>
      <div className="w-full h-19 bg-[#252525]  flex justify-center items-center font-semibold text-[#AAAAAA]">
        <h1>Ⓒ {getFullYear} #VANLIFE</h1>
      </div>
    </>
  );
}
