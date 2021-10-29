import React, { Component } from 'react';
import {observer} from 'mobx-react';
import QnaStore from '../store/QnaStore';
import QnaMainView from '../component/QnaMainView';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {Pagination, Paper, Stack, Table, TableBody, TableContainer, TableHead} from '@mui/material';
import Button from '@mui/material/Button';
import "../qna.css";
//List
class QnaMainContainer extends Component {
    qnaStore = QnaStore;

    componentDidMount() {
        this.qnaStore.selectQnaAll();
    }
    render() {
        const {qnas} = this.qnaStore;
        const qnaList = qnas.map((qna) =>{
            return (<QnaMainView key={qna.qna_id} qna = {qna}/>)
        
        });
  
    
        return (
            <div id="qnaList">
                <h2>문의사항</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ width: "100%" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">글번호</TableCell>
                                <TableCell align="center">제목</TableCell>
                                <TableCell align="center">카테고리</TableCell>
                                <TableCell align="center">작성자</TableCell>
                                <TableCell align="center">작성일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{qnaList}</TableBody>
                    </Table>
                </TableContainer>

                <div className="button-align">
                    <Button
                        variant="contained"
                        className="link"
                        href="/qna/create/"
                    >
                        글작성
                    </Button>
                </div>

                <Stack className="paging">
                    <Pagination count={10}/>
                </Stack>
            </div>
        );



        // const columns = [
        //     {
        //         field: "id",
        //         headerName: "글번호",
        //         width: 100,
        //     },
        //     {
        //         field: "title",
        //         headerName: "제목",
        //         width: 500,
        //         renderCell: (cellValues) => {
        //             return (
        //                 <Link
        //                     href={`/qna/detail/${cellValues.row.id}`}
        //                     style={{
        //                         textDecorationLine: "none",
        //                         color: "black",
        //                     }}
        //                 >
        //                     {cellValues.row.title}
        //                 </Link>
        //             );
        //         },
                
        //     },
        //     { field: "category", headerName: "카테고리", width: 200 },
        //     { field: "name", headerName: "작성자", width: 200 },
        //     { field: "date", headerName: "작성일", width: 200 },
        // ];

        // const rows = [];
        // qnas.forEach((qna)=>{
        //     rows.push({
        //         id: qna.qna_id, title: qna.qna_title, category: qna.category, name:qna.question_user.name, date:(`${moment(qna.date).format("YYYY-MM-DD")}`)
        //     })
        // })

    
        // return (
        //     <div style={{ width: '100%', maxWidth: '1250px', margin: '30px auto' }}>
        
        //         <h2 style={{textAlign:'center', color:'#D5BA8C'}} >문의사항</h2>

        //         {<QnaMainView columns={columns} rows={rows} />}

        //         <div className="button-align">
        //         <Button variant="contained"  className="link" ><Link to={`/qna/create/`}>글작성</Link></Button>
          
        //         </div>
        //     </div> 

        // );
    }
}

export default observer(QnaMainContainer);