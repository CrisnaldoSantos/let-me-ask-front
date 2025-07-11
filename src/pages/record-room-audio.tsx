/** biome-ignore-all lint/suspicious/noConsole: testing */
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROOMS_URL } from "@/constants/urls";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

type RoomParams = {
  roomId: string;
};

export default function RecordRoomAudio() {
  const params = useParams<RoomParams>();
  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append("file", audio, "audio.webm");

    const response = await fetch(`${ROOMS_URL}/${params.roomId}/audio`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log("Upload result:", result);
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("O seu navegador não suporta gravação");
      return;
    }
    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    recorder.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };

    recorder.current.onstart = () => {
      console.log("Gravação Iniciada!");
    };

    recorder.current.onstop = () => {
      console.log("Gravação encerrada/pausada!");
    };

    recorder.current.start();
  }

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== "inactive") {
      recorder.current.stop();
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar Gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar Áudio</Button>
      )}

      {isRecording ? <p>Gravando...</p> : <p>Paudaso</p>}
    </div>
  );
}
