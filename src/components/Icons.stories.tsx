import type { Meta } from "@storybook/react";
import { AdobeAcrobat } from "./AdobeAcrobat";
import { Calendar } from "./Calendar";
import { Star } from "./Star";
import { StarFilled } from "./StarFilled";
import { SquareUpLeft } from "./SquareUpLeft";
import { Minus } from "./Minus";
import { SquareArrowDownRight } from "./SquareArrowDownRight";
import { SquareCaretUp } from "./SquareCaretUp";
import { SquareArrowUpLeft } from "./SquareArrowUpLeft";
import { SquareCaretDown } from "./SquareCaretDown";
import { SquareDownRight } from "./SquareDownRight";
import { Slash } from "./Slash";
import { SliderUp } from "./SliderUp";
import { Snowflake } from "./Snowflake";
import { Send } from "./Send";
import { SidebarLeft } from "./SidebarLeft";
import { Sigma } from "./Sigma";
import { Selected } from "./Selected";
import { Refresh } from "./Refresh";
import { ScaleBalanced } from "./ScaleBalanced";
import { Question } from "./Question";
import { Reply } from "./Reply";
import { RePost } from "./RePost";
import { RolePermission } from "./RolePermission";
import { Projects } from "./Projects";
import { QCApprove } from "./QCApprove";
import { ListSearch } from "./ListSearch";
import { CircleChecked } from "./CircleChecked";
import { PaintBrush } from "./PaintBrush";
import { Pencil } from "./Pencil";
import { Plus } from "./Plus";
import { Print } from "./Print";
import { ProductionSchedule } from "./ProductionSchedule";
import { Progress } from "./Progress";
import { Members } from "./Members";
import { SquareMinus } from "./SquareMinus";
import { Move } from "./Move";
import { NoteBadge } from "./NoteBadge";
import { Note } from "./Note";
import { ObjectGroup } from "./ObjectGroup";
import { Magnifier } from "./Magnifier";
import { MagnifierPlus } from "./MagnifierPlus";
import { MagnifierMinus } from "./MagnifierMinus";
import { MapPin } from "./MapPin";
import { Measuring } from "./Measuring";
import { LinkSlash } from "./LinkSlash";
import { Link } from "./Link";
import { List } from "./List";
import { LiftTruck } from "./LiftTruck";
import { LockOpen } from "./LockOpen";
import { Lock } from "./Lock";
import { ArrowLeftToLine } from "./ArrowLeftToLine";
import { Import } from "./Import";
import { InstallGlass } from "./InstallGlass";
import { InstallRail } from "./InstallRail";
import { LayerGroup } from "./LayerGroup";
import { Library } from "./Library";
import { Image } from "./Image";
import { Gear } from "./Gear";
import { Google } from "./Google";
import { GridDividers } from "./GridDividers";
import { Grip } from "./Grip";
import { House } from "./House";
import { Save } from "./Save";
import { FileChart } from "./FileChart";
import { FileChartColumn } from "./FileChartColumn";
import { FileExcel } from "./FileExcel";
import { FileLines } from "./FileLines";
import { Filter } from "./Filter";
import { FilterCircleXMark } from "./FilterCircleXMark";
import { FilterSlash } from "./FilterSlash";
import { FlagPennant } from "./FlagPennant";
import { FolderClosed } from "./FolderClosed";
import { FolderOpen } from "./FolderOpen";
import { Elipsis } from "./Elipsis";
import { ElipsisVertical } from "./ElipsisVertical";
import { ElipsisVerticalStroke } from "./ElipsisVerticalStroke";
import { Email } from "./Email";
import { Exclusion } from "./Exclusion";
import { Expand } from "./Expand";
import { Export } from "./Export";
import { Eye } from "./Eye";
import { EyeSlash } from "./EyeSlash";
import { Comments } from "./Comments";
import { Company } from "./Company";
import { Connect } from "./Connect";
import { Copy } from "./Copy";
import { Dashboard } from "./Dashboard";
import { Deficiency } from "./Deficiency";
import { DeficiencyList } from "./DeficiencyList";
import { Download } from "./Download";
import { Driver } from "./Driver";
import { CircleDollar } from "./CircleDollar";
import { CircleInfo } from "./CircleInfo";
import { CirclePlus } from "./CirclePlus";
import { CircleXmark } from "./CircleXmark";
import { Clock } from "./Clock";
import { Comma } from "./Comma";
import { Clone } from "./Clone";
import { CommentsBadge } from "./CommentsBadge";
import { ChevronDown } from "./ChevronDown";
import { ChevronRight } from "./ChevronRight";
import { ChevronUp } from "./ChevronUp";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronsDown } from "./ChevronsDown";
import { ChevronsLeft } from "./ChevronsLeft";
import { ChevronsRight } from "./ChevronsRight";
import { ChevronsUp } from "./ChevronsUp";
import { Bars } from "./Bars";
import { Ban } from "./Ban";
import { Bell } from "./Bell";
import { BarsSort } from "./BarsSort";
import { Board } from "./Board";
import { Breakdown } from "./Breakdown";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";
import { ArrowRightFromLine } from "./ArrowRightFromLine";
import { ArrowRotateRight } from "./ArrowRotateRight";
import { ArrowsInward } from "./ArrowsInward";
import { ArrowsOutward } from "./ArrowsOutward";
import { ArrowsMaximize } from "./ArrowsMaximize";
import { ArrowsMinimize } from "./ArrowsMinimize";
import { Assemblies } from "./Assemblies";
import { Attachment } from "./Attachment";
import { AlignCenter } from "./AlignCenter";
import { AlignJustify } from "./AlignJustify";
import { AlignLeft } from "./AlignLeft";
import { AlignRight } from "./AlignRight";
import { Archive } from "./Archive";
import { Transfer } from "./Transfer";
import { Trashcan } from "./Trashcan";
import { Treeview } from "./Treeview";
import { Triangle } from "./Triangle";
import { Upload } from "./Upload";
import { User } from "./User";
import { ValueEngineering } from "./ValueEngineering";
import { Warning } from "./Warning";
import { XMark } from "./XMark";

const meta: Meta = {
  title: "Icons",
  component: undefined,
};

export const Icons = () => {
  return (
    <>
      <style>
        {`
        svg {
          width: 36px;
          height: 36px;
        }
        `}
      </style>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <AdobeAcrobat />
        <AlignCenter />
        <AlignJustify />
        <AlignLeft />
        <AlignRight />
        <Archive />
        <ArrowLeft />
        <ArrowLeftToLine />
        <ArrowRight />
        <ArrowRightFromLine />
        <ArrowRotateRight />
        <ArrowsInward />
        <ArrowsOutward />
        <ArrowsMaximize />
        <ArrowsMinimize />
        <Assemblies />
        <Attachment />
        <Ban />
        <Bars />
        <BarsSort />
        <Bell />
        <Board />
        <Breakdown />
        <Calendar />
        <ChevronDown />
        <ChevronLeft />
        <ChevronRight />
        <ChevronUp />
        <ChevronsDown />
        <ChevronsLeft />
        <ChevronsRight />
        <ChevronsUp />
        <CircleChecked />
        <CircleDollar />
        <CircleInfo />
        <CirclePlus />
        <CircleXmark />
        <Clock />
        <Clone />
        <Comma />
        <Comments />
        <CommentsBadge />
        <Company />
        <Connect />
        <Copy />
        <Dashboard />
        <Deficiency />
        <DeficiencyList />
        <Download />
        <Driver />
        <Elipsis />
        <ElipsisVertical />
        <ElipsisVerticalStroke />
        <Email />
        <Exclusion />
        <Expand />
        <Export />
        <Eye />
        <EyeSlash />
        <FileChart />
        <FileChartColumn />
        <FileExcel />
        <FileLines />
        <Filter />
        <FilterCircleXMark />
        <FilterSlash />
        <FlagPennant />
        <FolderClosed />
        <FolderOpen />
        <Gear />
        <Google />
        <GridDividers />
        <Grip />
        <House />
        <Image />
        <Import />
        <InstallGlass />
        <InstallRail />
        <LayerGroup />
        <Library />
        <ListSearch />
        <LinkSlash />
        <Link />
        <List />
        <LiftTruck />
        <LockOpen />
        <Lock />
        <Magnifier />
        <MagnifierPlus />
        <MagnifierMinus />
        <MapPin />
        <Measuring />
        <Members />
        <Minus />
        <Move />
        <NoteBadge />
        <Note />
        <ObjectGroup />
        <PaintBrush />
        <Pencil />
        <Plus />
        <Print />
        <ProductionSchedule />
        <Progress />
        <Projects />
        <QCApprove />
        <Question />
        <Refresh />
        <Reply />
        <RePost />
        <RolePermission />
        <Save />
        <ScaleBalanced />
        <Selected />
        <Send />
        <SidebarLeft />
        <Sigma />
        <Slash />
        <SliderUp />
        <Snowflake />
        <SquareArrowUpLeft />
        <SquareArrowDownRight />
        <SquareCaretDown />
        <SquareCaretUp />
        <SquareDownRight />
        <SquareUpLeft />
        <SquareMinus />
        <Star />
        <StarFilled />
        <Transfer />
        <Trashcan />
        <Treeview />
        <Triangle />
        <Upload />
        <User />
        <ValueEngineering />
        <Warning />
        <XMark />
      </div>
    </>
  );
};

export default meta;
