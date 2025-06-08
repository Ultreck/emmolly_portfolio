export type AppTrackingResponse = {
  message: string;
  success: boolean;
  appTrackingInfos: {
    _id: string;
    appName: string;
    countries: {
      countryName: string;
      countryCode: string;
      ips: string[];
      _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};


export const fetchTrackingData = async (): Promise<AppTrackingResponse[]> => {
  const res = await fetch(`https://emmolly-nodejs.onrender.com/app/tracking/emmolly_portfolio`);
  if (!res.ok) {
    throw new Error("Failed to fetch tracking data")
  }
  console.log(res);
  
  return res.json();
};