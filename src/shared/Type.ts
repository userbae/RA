interface SuccessProps {
  pos: {
    coords: {
      accuracy: number;
      latitude: number;
      longitude: number;
      speed: number | null | undefined;
    };
  };
  setLat: React.Dispatch<React.SetStateAction<number>>;
  setLong: React.Dispatch<React.SetStateAction<number>>;
}

interface ErrorProps {
  code: number;
  message: string;
}

interface ResultProps {
  address: {
    region_1depth_name: string;
    region_2depth_name: string;
    region_3depth_name: string;
  };
}

interface useGetLocProps {
  name1: string;
  name2: string;
  name3: string;
  locE: (name1: string, name2: string, name3: string) => void;
}

export type { SuccessProps, ErrorProps, ResultProps, useGetLocProps };
