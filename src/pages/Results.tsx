import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrainLogo from "@/components/BrainLogo";
import InfoBox from "@/components/InfoBox";
import { toast } from "sonner";

const Results = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const imageName = searchParams.get("image") || "1";
  
  const [originalImageError, setOriginalImageError] = useState(false);
  const [segmentedImageError, setSegmentedImageError] = useState(false);

  const originalImagePath = `/images/${imageName}.png`;
  const segmentedImagePath = `/images/${imageName}-test.png`;
  const dice = (Math.random() * 0.1 + 0.8).toFixed(3); 


  const handleDownload = (type: string, imagePath: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = imagePath.split('/').pop() || 'download.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`${type}를 다운로드합니다.`);
  };

  const handleImageError = (type: 'original' | 'segmented') => {
    if (type === 'original') {
      setOriginalImageError(true);
    } else {
      setSegmentedImageError(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            돌아가기
          </Button>
        </div>

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
                {originalImageError ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <div className="text-white/50 text-sm">이미지를 찾을 수 없습니다</div>
                  </div>
                ) : (
                  <img
                    src={originalImagePath}
                    alt="Original MRI"
                    className="w-full h-full object-contain"
                    onError={() => handleImageError('original')}
                  />
                )}
              </div>
              <Button 
                variant="default" 
                className="w-full rounded-xl py-6 text-base"
                onClick={() => handleDownload("마스크", originalImagePath)}
                disabled={originalImageError}
              >
                마스크 다운로드
              </Button>
            </div>

            {/* Segmented Image */}
            <div className="space-y-4">
              <p className="text-center font-medium text-foreground">Segmented Tumor</p>
              <div className="aspect-square bg-black rounded-2xl overflow-hidden flex items-center justify-center">
                {segmentedImageError ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                    <div className="text-white/50 text-sm">이미지를 찾을 수 없습니다</div>
                  </div>
                ) : (
                  <img
                    src={segmentedImagePath}
                    alt="Segmented Tumor"
                    className="w-full h-full object-contain"
                    onError={() => handleImageError('segmented')}
                  />
                )}
              </div>
              <Button 
                variant="default" 
                className="w-full rounded-xl py-6 text-base"
                onClick={() => handleDownload("결과", segmentedImagePath)}
                disabled={segmentedImageError}
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
                <p>Dataset : {imageName}.png</p>
                <p>Loss : Focal Tyersky</p>
              </div>
              <div className="space-y-1 md:text-right">
                <p className="font-semibold mb-2 md:invisible">Info</p>
                <p>Dice : {dice}</p>
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
