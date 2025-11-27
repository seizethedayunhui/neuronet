import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload as UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrainLogo from "@/components/BrainLogo";
import InfoBox from "@/components/InfoBox";
import { toast } from "sonner";

const Upload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      const validExtensions = ['.png', '.jpg', '.jpeg'];
      const hasValidExtension = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
      
      if (validTypes.includes(file.type) || hasValidExtension) {
        setSelectedFile(file);
        toast.success("파일이 선택되었습니다.");
        
        // 파일명에서 숫자 추출 (예: "1.png" -> "1")
        const fileNameWithoutExt = file.name.replace(/\.(png|jpg|jpeg)$/i, '');
        
        // 결과 페이지로 이동하면서 파일명 전달
        setTimeout(() => {
          navigate(`/results?image=${encodeURIComponent(fileNameWithoutExt)}`);
        }, 1000);
      } else {
        toast.error("지원하지 않는 파일 형식입니다.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <BrainLogo />
        
        <div className="bg-card rounded-3xl shadow-lg p-12">
          <div className="flex flex-col items-center space-y-8">
            {/* Upload Icon */}
            <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
              <UploadIcon className="w-16 h-16 text-accent" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">
                MRI 영상을 업로드 하세요.
              </h2>
              <p className="text-muted-foreground">
                (T1c, T2, Flair - PNG / JPG / NIfTI)
              </p>
            </div>

            {/* Upload Button */}
            <label htmlFor="file-upload">
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileSelect}
              />
              <Button 
                size="lg" 
                className="text-lg px-12 py-6 rounded-xl cursor-pointer"
                asChild
              >
                <span>파일 선택하기</span>
              </Button>
            </label>

            {selectedFile && (
              <p className="text-sm text-muted-foreground">
                선택된 파일: {selectedFile.name}
              </p>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6">
          <InfoBox>
            <div className="space-y-1">
              <p>지원 파일 형식: JPG, PNG, NIfTI (.nii, .nii.gz)</p>
              <p>권장 해상도: 240 × 240</p>
              <p>업로드 후 Segmentation이 활성화됩니다.</p>
            </div>
          </InfoBox>
        </div>
      </div>
    </div>
  );
};

export default Upload;
