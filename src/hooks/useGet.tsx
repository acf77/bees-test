import axios from "axios";
import { useEffect, useState } from "react";

type IGetProps = {
  link: string;
  body?: any;
};

export default function useGet({ link, body }: IGetProps) {
  const [reqData, setReqData] = useState<string>();

  useEffect(() => {
    const request = async () => {
      try {
        const req = await axios.get(link, body);
        setReqData(req.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };
    request();
  }, [link]);

  return [reqData];
}
