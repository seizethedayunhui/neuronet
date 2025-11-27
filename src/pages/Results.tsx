import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrainLogo from "@/components/BrainLogo";
import InfoBox from "@/components/InfoBox";
import { toast } from "sonner";

const Results = () => {
  const handleDownload = (type: string) => {
    toast.success(`${type}를 다운로드합니다.`);
    // 실제 구현에서는 여기서 파일 다운로드를 처리합니다
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <BrainLogo />
        
        <div className="bg-card rounded-3xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            세그멘테이션 결과
          </h2>

          {/* Image Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Original Image */}
            <div className="space-y-4">
              <p className="text-center font-medium text-foreground">Original Image</p>
              <div className="aspect-square bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <div className="text-white/50 text-sm">MRI Scan</div>
                </div>
              </div>
              <Button 
                variant="default" 
                className="w-full rounded-xl py-6 text-base"
                onClick={() => handleDownload("마스크")}
              >
                마스크 다운로드
              </Button>
            </div>

            {/* Segmented Image */}
            <div className="space-y-4">
              <p className="text-center font-medium text-foreground">Segmented Tumor</p>
              <div className="aspect-square bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative">
                  <div className="text-white/50 text-sm">MRI Scan</div>
                  <div className="absolute top-1/2 right-1/3 w-12 h-8 bg-green-500/60 rounded-full blur-sm"></div>
                </div>
              </div>
              <Button 
                variant="default" 
                className="w-full rounded-xl py-6 text-base"
                onClick={() => handleDownload("결과")}
              >
                결과 다운로드
              </Button>
            </div>
          </div>

          {/* Segmentation Info */}
          <InfoBox>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              <div className="space-y-1">
                <p className="font-semibold mb-2">세그멘테이션 정보</p>
                <p>Model : Neuro-Net</p>
                <p>Dataset : BraTS-men-00024.nii.gz</p>
                <p>Loss : Focal Tyersky</p>
              </div>
              <div className="space-y-1 md:text-right">
                <p className="font-semibold mb-2 md:invisible">Info</p>
                <p>Dice : 0.8742</p>
                <p>Inference Time : 0.42s</p>
              </div>
            </div>
          </InfoBox>
        </div>
      </div>
    </div>
  );
};

export default Results;
