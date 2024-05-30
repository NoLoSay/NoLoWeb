import { Paper } from "@mui/material";
import { LineChart, Line } from 'recharts';
import MovingIcon from '@mui/icons-material/Moving';

const styles: { [key: string]: string } = {
  container_00: "flex flex-col items-center p-3 space-y-5 m-5",
  container_0: "font-sans font-bold",
  container_1: "flex flex-row items-center",
  container_2: "flex flex-col",
  container_3: "font-sans",
  container_4: "flex flex-row",
  container_5: "font-sans"
};

type GraphProps = {
  title?: string;
  datas?: any[];
  value?: any;
};

const otherObjects = [
  { name: 'Page B', uv: 300, pv: 1000, amt: 1500 },
  { name: 'Page C', uv: 600, pv: 2000, amt: 1800 }
];

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, ...otherObjects];

function GraphCard({ title, datas, value }: GraphProps) {
  return (
    <Paper className={`container_00 ${styles.container_00}`}>
      <p className={`container_0 ${styles.container_0}`}>{title}</p>
      <div className={`container_1 ${styles.container_1}`}>
        <div className={`container_2 ${styles.container_2}`}>
          <p className={`container_3 ${styles.container_3}`}>{value}</p>
          <div className={`container_4 ${styles.container_4}`}>
            <MovingIcon sx={{color:"#16c768"}}/>
            <p className={`container_5 ${styles.container_5}`}>{"+9,71%"}</p>
          </div>
        </div>
        <LineChart width={400} height={200} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </div>
    </Paper>
  );
}

export default GraphCard;
