import { Card, CardBody, Typography } from "@material-tailwind/react";

export function DashboardCards({ title, date, content }) {
  return (
    <Card className="mt-2 w-[540px] bg-[#F9F9F9] border-l-4 ">
      <CardBody>
        <div className="flex justify-between mb-2 ">
          <Typography variant="h6" color="blue-gray" className="mb-2 mt-2 ml-2 font-bold">
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#979797" }}
            className="mb-1 mr-2 mt-[2%]"
          >
            {date}
          </Typography>
        </div>

        <Typography className="text-sm ml-2 mb-2">{content}</Typography>
      </CardBody>
    </Card>
  );
}
