import logoImage from "@/assets/neuronet-logo.png";

const BrainLogo = () => {
  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <img 
        src={logoImage} 
        alt="NeuroNet Logo" 
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

export default BrainLogo;
