interface InfoBoxProps {
  children: React.ReactNode;
}

const InfoBox = ({ children }: InfoBoxProps) => {
  return (
    <div className="bg-info text-info-foreground rounded-xl p-6 text-sm leading-relaxed">
      {children}
    </div>
  );
};

export default InfoBox;
