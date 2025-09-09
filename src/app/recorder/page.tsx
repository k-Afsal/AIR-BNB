'use client';

import { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Video, Sparkles, AlertCircle } from 'lucide-react';
import { summarizeVideo } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function RecorderPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this app.',
        });
      }
    };

    getCameraPermission();
  }, [toast]);

  const handleStartRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        setVideoBlob(blob);
        recordedChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleGetSummary = async () => {
    if (!videoBlob) return;
    setIsLoading(true);
    setSummary('');

    try {
      const reader = new FileReader();
      reader.readAsDataURL(videoBlob);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const result = await summarizeVideo(base64data);
        if (result.error) {
          throw new Error(result.error);
        }
        setSummary(result.summary);
      };
    } catch (error) {
      const e = error as Error;
      toast({
        variant: 'destructive',
        title: 'Summarization Failed',
        description: e.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 pt-28">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Video />
                Video Recorder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
                <video ref={videoRef} className="w-full h-full" autoPlay muted playsInline />
                {!hasCameraPermission && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                     <Alert variant="destructive" className="w-auto">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Camera Access Required</AlertTitle>
                        <AlertDescription>
                          Please allow camera access to use this feature.
                        </AlertDescription>
                    </Alert>
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-center gap-4">
                <Button onClick={handleStartRecording} disabled={isRecording || !hasCameraPermission}>
                  Start Recording
                </Button>
                <Button onClick={handleStopRecording} disabled={!isRecording}>
                  Stop Recording
                </Button>
              </div>
            </CardContent>
          </Card>

          {videoBlob && (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Recorded Video</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <video src={URL.createObjectURL(videoBlob)} controls className="w-full rounded-md" />
                <Button onClick={handleGetSummary} disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Get AI Summary
                </Button>
              </CardContent>
            </Card>
          )}

          {summary && (
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea value={summary} readOnly rows={10} />
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}