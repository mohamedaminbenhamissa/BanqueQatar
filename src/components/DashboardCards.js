import { Card, CardBody, Typography } from "@material-tailwind/react";

export function DashboardCards({ title, date, content }) {
  return (
    <Card className="mt-2 w-[540px] bg-[#F9F9F9]">
      <CardBody>
        <div className="flex justify-between mb-2">
          <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#979797" }}
            className="mb-1"
          >
            {date}
          </Typography>
        </div>

        <Typography className="text-sm">{content}</Typography>
      </CardBody>
    </Card>
  );
}
