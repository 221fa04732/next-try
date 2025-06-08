import Link from "next/link";

const rout = [{
    "path" : "/hii",
    "name" : "first route"
},{
    path : "/hii2",
    name : "second route"
}]
export default function Header() {
  return (<div>
    {rout.map((item)=>(
        <Link href={item.path}>{item.name}</Link>
    ))}
  </div>
  );
}
