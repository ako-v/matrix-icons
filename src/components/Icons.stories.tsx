import * as React from "react";
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
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const iconNames = document.querySelectorAll(".icon-name");
    iconNames.forEach(iconName => {
      const name = iconName.getAttribute("data-name");
      if (name?.toLowerCase().includes(searchValue.toLowerCase())) {
        iconName.parentElement!.style.display = "block";
      } else {
        iconName.parentElement!.style.display = "none";
      }
    });
  }, [searchValue]);

  return (
    <>
      <style>
        {`
        svg {
          width: 36px;
          height: 36px;
        }
        .container {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 2rem;
         }
        .container > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
         }
        `}
      </style>
      <div style={{ marginBottom: "2rem" }}>
        <span>Search: </span>
        <input
          type="search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          style={{ height: 32, width: 300, borderRadius: 4, border: "1px solid gray", padding: 4, fontSize: "14px" }}
        />
      </div>
      <div className="container">
        <div>
          <div className="icon-name" data-name="AdobeAcrobat">
            AdobeAcrobat
          </div>
          <AdobeAcrobat />
        </div>
        <div>
          <div className="icon-name" data-name="AlignCenter">
            AlignCenter
          </div>
          <AlignCenter />
        </div>
        <div>
          <div className="icon-name" data-name="AlignJustify">
            AlignJustify
          </div>
          <AlignJustify />
        </div>
        <div>
          <div className="icon-name" data-name="AlignLeft">
            AlignLeft
          </div>
          <AlignLeft />
        </div>
        <div>
          <div className="icon-name" data-name="AlignRight">
            AlignRight
          </div>
          <AlignRight />
        </div>
        <div>
          <div className="icon-name" data-name="Archive">
            Archive
          </div>
          <Archive />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowLeft">
            ArrowLeft
          </div>
          <ArrowLeft />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowLeftToLine">
            ArrowLeftToLine
          </div>
          <ArrowLeftToLine />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowRight">
            ArrowRight
          </div>
          <ArrowRight />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowRightFromLine">
            ArrowRightFromLine
          </div>
          <ArrowRightFromLine />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowRotateRight">
            ArrowRotateRight
          </div>
          <ArrowRotateRight />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowsInward">
            ArrowsInward
          </div>
          <ArrowsInward />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowsOutward">
            ArrowsOutward
          </div>
          <ArrowsOutward />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowsMaximize">
            ArrowsMaximize
          </div>
          <ArrowsMaximize />
        </div>
        <div>
          <div className="icon-name" data-name="ArrowsMinimize">
            ArrowsMinimize
          </div>
          <ArrowsMinimize />
        </div>
        <div>
          <div className="icon-name" data-name="Assemblies">
            Assemblies
          </div>
          <Assemblies />
        </div>
        <div>
          <div className="icon-name" data-name="Attachment">
            Attachment
          </div>
          <Attachment />
        </div>
        <div>
          <div className="icon-name" data-name="Ban">
            Ban
          </div>
          <Ban />
        </div>
        <div>
          <div className="icon-name" data-name="Bars">
            Bars
          </div>
          <Bars />
        </div>
        <div>
          <div className="icon-name" data-name="BarsSort">
            BarsSort
          </div>
          <BarsSort />
        </div>
        <div>
          <div className="icon-name" data-name="Bell">
            Bell
          </div>
          <Bell />
        </div>
        <div>
          <div className="icon-name" data-name="Board">
            Board
          </div>
          <Board />
        </div>
        <div>
          <div className="icon-name" data-name="Breakdown">
            Breakdown
          </div>
          <Breakdown />
        </div>
        <div>
          <div className="icon-name" data-name="Calendar">
            Calendar
          </div>
          <Calendar />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronDown">
            ChevronDown
          </div>
          <ChevronDown />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronLeft">
            ChevronLeft
          </div>
          <ChevronLeft />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronRight">
            ChevronRight
          </div>
          <ChevronRight />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronUp">
            ChevronUp
          </div>
          <ChevronUp />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronsDown">
            ChevronsDown
          </div>
          <ChevronsDown />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronsLeft">
            ChevronsLeft
          </div>
          <ChevronsLeft />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronsRight">
            ChevronsRight
          </div>
          <ChevronsRight />
        </div>
        <div>
          <div className="icon-name" data-name="ChevronsUp">
            ChevronsUp
          </div>
          <ChevronsUp />
        </div>
        <div>
          <div className="icon-name" data-name="CircleChecked">
            CircleChecked
          </div>
          <CircleChecked />
        </div>
        <div>
          <div className="icon-name" data-name="CircleDollar">
            CircleDollar
          </div>
          <CircleDollar />
        </div>
        <div>
          <div className="icon-name" data-name="CircleInfo">
            CircleInfo
          </div>
          <CircleInfo />
        </div>
        <div>
          <div className="icon-name" data-name="CirclePlus">
            CirclePlus
          </div>
          <CirclePlus />
        </div>
        <div>
          <div className="icon-name" data-name="CircleXmark">
            CircleXmark
          </div>
          <CircleXmark />
        </div>
        <div>
          <div className="icon-name" data-name="Clock">
            Clock
          </div>
          <Clock />
        </div>
        <div>
          <div className="icon-name" data-name="Clone">
            Clone
          </div>
          <Clone />
        </div>
        <div>
          <div className="icon-name" data-name="Comma">
            Comma
          </div>
          <Comma />
        </div>
        <div>
          <div className="icon-name" data-name="Comments">
            Comments
          </div>
          <Comments />
        </div>
        <div>
          <div className="icon-name" data-name="CommentsBadge">
            CommentsBadge
          </div>
          <CommentsBadge />
        </div>
        <div>
          <div className="icon-name" data-name="Company">
            Company
          </div>
          <Company />
        </div>
        <div>
          <div className="icon-name" data-name="Connect">
            Connect
          </div>
          <Connect />
        </div>
        <div>
          <div className="icon-name" data-name="Copy">
            Copy
          </div>
          <Copy />
        </div>
        <div>
          <div className="icon-name" data-name="Dashboard">
            Dashboard
          </div>
          <Dashboard />
        </div>
        <div>
          <div className="icon-name" data-name="Deficiency">
            Deficiency
          </div>
          <Deficiency />
        </div>
        <div>
          <div className="icon-name" data-name="DeficiencyList">
            DeficiencyList
          </div>
          <DeficiencyList />
        </div>
        <div>
          <div className="icon-name" data-name="Download">
            Download
          </div>
          <Download />
        </div>
        <div>
          <div className="icon-name" data-name="Driver">
            Driver
          </div>
          <Driver />
        </div>
        <div>
          <div className="icon-name" data-name="Elipsis">
            Elipsis
          </div>
          <Elipsis />
        </div>
        <div>
          <div className="icon-name" data-name="ElipsisVertical">
            ElipsisVertical
          </div>
          <ElipsisVertical />
        </div>
        <div>
          <div className="icon-name" data-name="ElipsisVerticalStroke">
            ElipsisVerticalStroke
          </div>
          <ElipsisVerticalStroke />
        </div>
        <div>
          <div className="icon-name" data-name="Email">
            Email
          </div>
          <Email />
        </div>
        <div>
          <div className="icon-name" data-name="Exclusion">
            Exclusion
          </div>
          <Exclusion />
        </div>
        <div>
          <div className="icon-name" data-name="Expand">
            Expand
          </div>
          <Expand />
        </div>
        <div>
          <div className="icon-name" data-name="Export">
            Export
          </div>
          <Export />
        </div>
        <div>
          <div className="icon-name" data-name="Eye">
            Eye
          </div>
          <Eye />
        </div>
        <div>
          <div className="icon-name" data-name="EyeSlash">
            EyeSlash
          </div>
          <EyeSlash />
        </div>
        <div>
          <div className="icon-name" data-name="FileChart">
            FileChart
          </div>
          <FileChart />
        </div>
        <div>
          <div className="icon-name" data-name="FileChartColumn">
            FileChartColumn
          </div>
          <FileChartColumn />
        </div>
        <div>
          <div className="icon-name" data-name="FileExcel">
            FileExcel
          </div>
          <FileExcel />
        </div>
        <div>
          <div className="icon-name" data-name="FileLines">
            FileLines
          </div>
          <FileLines />
        </div>
        <div>
          <div className="icon-name" data-name="Filter">
            Filter
          </div>
          <Filter />
        </div>
        <div>
          <div className="icon-name" data-name="FilterCircleXMark">
            FilterCircleXMark
          </div>
          <FilterCircleXMark />
        </div>
        <div>
          <div className="icon-name" data-name="FilterSlash">
            FilterSlash
          </div>
          <FilterSlash />
        </div>
        <div>
          <div className="icon-name" data-name="FlagPennant">
            FlagPennant
          </div>
          <FlagPennant />
        </div>
        <div>
          <div className="icon-name" data-name="FolderClosed">
            FolderClosed
          </div>
          <FolderClosed />
        </div>
        <div>
          <div className="icon-name" data-name="FolderOpen">
            FolderOpen
          </div>
          <FolderOpen />
        </div>
        <div>
          <div className="icon-name" data-name="Gear">
            Gear
          </div>
          <Gear />
        </div>
        <div>
          <div className="icon-name" data-name="Google">
            Google
          </div>
          <Google />
        </div>
        <div>
          <div className="icon-name" data-name="GridDividers">
            GridDividers
          </div>
          <GridDividers />
        </div>
        <div>
          <div className="icon-name" data-name="Grip">
            Grip
          </div>
          <Grip />
        </div>
        <div>
          <div className="icon-name" data-name="House">
            House
          </div>
          <House />
        </div>
        <div>
          <div className="icon-name" data-name="Image">
            Image
          </div>
          <Image />
        </div>
        <div>
          <div className="icon-name" data-name="Import">
            Import
          </div>
          <Import />
        </div>
        <div>
          <div className="icon-name" data-name="InstallGlass">
            InstallGlass
          </div>
          <InstallGlass />
        </div>
        <div>
          <div className="icon-name" data-name="InstallRail">
            InstallRail
          </div>
          <InstallRail />
        </div>
        <div>
          <div className="icon-name" data-name="LayerGroup">
            LayerGroup
          </div>
          <LayerGroup />
        </div>
        <div>
          <div className="icon-name" data-name="Library">
            Library
          </div>
          <Library />
        </div>
        <div>
          <div className="icon-name" data-name="ListSearch">
            ListSearch
          </div>
          <ListSearch />
        </div>
        <div>
          <div className="icon-name" data-name="LinkSlash">
            LinkSlash
          </div>
          <LinkSlash />
        </div>
        <div>
          <div className="icon-name" data-name="Link">
            Link
          </div>
          <Link />
        </div>
        <div>
          <div className="icon-name" data-name="List">
            List
          </div>
          <List />
        </div>
        <div>
          <div className="icon-name" data-name="LiftTruck">
            LiftTruck
          </div>
          <LiftTruck />
        </div>
        <div>
          <div className="icon-name" data-name="LockOpen">
            LockOpen
          </div>
          <LockOpen />
        </div>
        <div>
          <div className="icon-name" data-name="Lock">
            Lock
          </div>
          <Lock />
        </div>
        <div>
          <div className="icon-name" data-name="Magnifier">
            Magnifier
          </div>
          <Magnifier />
        </div>
        <div>
          <div className="icon-name" data-name="MagnifierPlus">
            MagnifierPlus
          </div>
          <MagnifierPlus />
        </div>
        <div>
          <div className="icon-name" data-name="MagnifierMinus">
            MagnifierMinus
          </div>
          <MagnifierMinus />
        </div>
        <div>
          <div className="icon-name" data-name="MapPin">
            MapPin
          </div>
          <MapPin />
        </div>
        <div>
          <div className="icon-name" data-name="Measuring">
            Measuring
          </div>
          <Measuring />
        </div>
        <div>
          <div className="icon-name" data-name="Members">
            Members
          </div>
          <Members />
        </div>
        <div>
          <div className="icon-name" data-name="Minus">
            Minus
          </div>
          <Minus />
        </div>
        <div>
          <div className="icon-name" data-name="Move">
            Move
          </div>
          <Move />
        </div>
        <div>
          <div className="icon-name" data-name="NoteBadge">
            NoteBadge
          </div>
          <NoteBadge />
        </div>
        <div>
          <div className="icon-name" data-name="Note">
            Note
          </div>
          <Note />
        </div>
        <div>
          <div className="icon-name" data-name="ObjectGroup">
            ObjectGroup
          </div>
          <ObjectGroup />
        </div>
        <div>
          <div className="icon-name" data-name="PaintBrush">
            PaintBrush
          </div>
          <PaintBrush />
        </div>
        <div>
          <div className="icon-name" data-name="Pencil">
            Pencil
          </div>
          <Pencil />
        </div>
        <div>
          <div className="icon-name" data-name="Plus">
            Plus
          </div>
          <Plus />
        </div>
        <div>
          <div className="icon-name" data-name="Print">
            Print
          </div>
          <Print />
        </div>
        <div>
          <div className="icon-name" data-name="ProductionSchedule">
            ProductionSchedule
          </div>
          <ProductionSchedule />
        </div>
        <div>
          <div className="icon-name" data-name="Progress">
            Progress
          </div>
          <Progress />
        </div>
        <div>
          <div className="icon-name" data-name="Projects">
            Projects
          </div>
          <Projects />
        </div>
        <div>
          <div className="icon-name" data-name="QCApprove">
            QCApprove
          </div>
          <QCApprove />
        </div>
        <div>
          <div className="icon-name" data-name="Question">
            Question
          </div>
          <Question />
        </div>
        <div>
          <div className="icon-name" data-name="Refresh">
            Refresh
          </div>
          <Refresh />
        </div>
        <div>
          <div className="icon-name" data-name="Reply">
            Reply
          </div>
          <Reply />
        </div>
        <div>
          <div className="icon-name" data-name="RePost">
            RePost
          </div>
          <RePost />
        </div>
        <div>
          <div className="icon-name" data-name="RolePermission">
            RolePermission
          </div>
          <RolePermission />
        </div>
        <div>
          <div className="icon-name" data-name="Save">
            Save
          </div>
          <Save />
        </div>
        <div>
          <div className="icon-name" data-name="ScaleBalanced">
            ScaleBalanced
          </div>
          <ScaleBalanced />
        </div>
        <div>
          <div className="icon-name" data-name="Selected">
            Selected
          </div>
          <Selected />
        </div>
        <div>
          <div className="icon-name" data-name="Send">
            Send
          </div>
          <Send />
        </div>
        <div>
          <div className="icon-name" data-name="SidebarLeft">
            SidebarLeft
          </div>
          <SidebarLeft />
        </div>
        <div>
          <div className="icon-name" data-name="Sigma">
            Sigma
          </div>
          <Sigma />
        </div>
        <div>
          <div className="icon-name" data-name="Slash">
            Slash
          </div>
          <Slash />
        </div>
        <div>
          <div className="icon-name" data-name="SliderUp">
            SliderUp
          </div>
          <SliderUp />
        </div>
        <div>
          <div className="icon-name" data-name="Snowflake">
            Snowflake
          </div>
          <Snowflake />
        </div>
        <div>
          <div className="icon-name" data-name="SquareArrowUpLeft">
            SquareArrowUpLeft
          </div>
          <SquareArrowUpLeft />
        </div>
        <div>
          <div className="icon-name" data-name="SquareArrowDownRight">
            SquareArrowDownRight
          </div>
          <SquareArrowDownRight />
        </div>
        <div>
          <div className="icon-name" data-name="SquareCaretDown">
            SquareCaretDown
          </div>
          <SquareCaretDown />
        </div>
        <div>
          <div className="icon-name" data-name="SquareCaretUp">
            SquareCaretUp
          </div>
          <SquareCaretUp />
        </div>
        <div>
          <div className="icon-name" data-name="SquareDownRight">
            SquareDownRight
          </div>
          <SquareDownRight />
        </div>
        <div>
          <div className="icon-name" data-name="SquareUpLeft">
            SquareUpLeft
          </div>
          <SquareUpLeft />
        </div>
        <div>
          <div className="icon-name" data-name="SquareMinus">
            SquareMinus
          </div>
          <SquareMinus />
        </div>
        <div>
          <div className="icon-name" data-name="Star">
            Star
          </div>
          <Star />
        </div>
        <div>
          <div className="icon-name" data-name="StarFilled">
            StarFilled
          </div>
          <StarFilled />
        </div>
        <div>
          <div className="icon-name" data-name="Transfer">
            Transfer
          </div>
          <Transfer />
        </div>
        <div>
          <div className="icon-name" data-name="Trashcan">
            Trashcan
          </div>
          <Trashcan />
        </div>
        <div>
          <div className="icon-name" data-name="Treeview">
            Treeview
          </div>
          <Treeview />
        </div>
        <div>
          <div className="icon-name" data-name="Triangle">
            Triangle
          </div>
          <Triangle />
        </div>
        <div>
          <div className="icon-name" data-name="Upload">
            Upload
          </div>
          <Upload />
        </div>
        <div>
          <div className="icon-name" data-name="User">
            User
          </div>
          <User />
        </div>
        <div>
          <div className="icon-name" data-name="ValueEngineering">
            ValueEngineering
          </div>
          <ValueEngineering />
        </div>
        <div>
          <div className="icon-name" data-name="Warning">
            Warning
          </div>
          <Warning />
        </div>
        <div>
          <div className="icon-name" data-name="XMark">
            XMark
          </div>
          <XMark />
        </div>
      </div>
    </>
  );
};

export default meta;
