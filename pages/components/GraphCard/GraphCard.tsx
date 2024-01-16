import { Paper } from "@mui/material";
import { LineChart, Line } from 'recharts';
import MovingIcon from '@mui/icons-material/Moving';

const otherObjects = [
  { name: 'Page B', uv: 300, pv: 1000, amt: 1500 },
  { name: 'Page C', uv: 600, pv: 2000, amt: 1800 }
];

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, ...otherObjects];

function GraphCard({ title, datas, value }: any) {
  return (
    <Paper className={`flex flex-col items-center p-3 space-y-5 m-5`}>
      <p className="font-sans font-bold">{title}</p>
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <p className="font-sans">{value}</p>
          <div className="flex flex-row">
            <MovingIcon sx={{color:"#16c768"}}/>
            <p className="font-sans">{"+9,71%"}</p>
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
