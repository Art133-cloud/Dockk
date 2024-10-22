import React from "react";
import styles from "./Excel.module.css";
import Container from "../basic/container/Container";
import TableExcel from "../../assets/ExcelTable.png";
function Excel () {
    return (
        <div className={styles.excelContent}>
            <Container>
                <div className={styles.childExcel}>
                    <div className={styles.leftExcel}>
                        <img src={TableExcel} alt="table" />
                    </div>
                    <div className={styles.rightExcel}>
                        <h2>Navigate complex deals and onboard customers</h2>
                        <p>Stop using that spreadsheet. Instead, build a collaborative mutual action plan with customers - share status, align due dates, assign tasks, leave comments and upload files.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Excel