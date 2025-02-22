import TopImage from "@/app/utils/topimage/TopImage";
import styles from "../../../page.module.css";
import Link from "next/link";
const SystemsDevelopment = () => {
  return (
    
    <>
      <TopImage />
      
      <div className="container text-center mt-5">
        <div className="alert alert-warning " role="alert">
          <section className={`${styles.topsection}`}>
            <div>
              🚧 لا توجد مشاريع متاحة حاليًا. يرجى التحقق لاحقًا!
            </div>
            <Link href="/" className="BtnStyle231 m-2">
              <span>
                الي الرئسيه 
              </span>
            </Link>
            <Link href="/projects" className="BtnStyle231 m-2">
              <span>
                الي المشاريع    
              </span>
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}

export default SystemsDevelopment