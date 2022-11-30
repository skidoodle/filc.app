interface PlanProps {
  icon: any;
  price: number;
  title: any;
  description: string;
}

export default function PlanCard({
  price,
  icon,
  title,
  description,
}: PlanProps) {
  return (
    <>
      <div
        className="flex flex-col gap-1 md:w-80 w-full p-4 rounded-xl border"
        style={{
          background: "#F8FEFD",
          borderColor: "#01342D",
        }}
      >
        <div className="flex justify-between">
          <div>
            <div className="w-10 mb-2">{icon}</div>
            <div className="text-xl font-bold">{title}</div>
          </div>
          <div>
            <span className="text-xl font-bold">{`${price} / hó`}</span>
          </div>
        </div>
        {description}
      </div>
    </>
  );
}
