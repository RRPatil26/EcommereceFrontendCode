import axios from "axios";
import { useEffect, useState } from "react";

function CategoryList() {

  const [categories,
         setCategories] =
         useState([]);

  useEffect(() => {

    axios.get(
      "http://localhost:3333/categories"
    )
    .then((response) => {
        console.log(response.data);

      setCategories(
        response.data
      );

    });

  }, []);

  return (

    <div className="container">

      <div className="row">

        {
          categories.map((category) => (

            <div
              className="col-md-3"
              key={category.categoryId}
            >

              <div
                className="card shadow-sm"
              >

                <img
                  src={category.categoryImage}
                  className="card-img-top"
                  alt=""
                  style={{
                    height:"150px",
                    width:"250px"
                  }}
                />

                <div
                  className="card-body"
                >

                  <h6>
                    {category.categoryName}
                  </h6>
                  {category.description}

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default CategoryList;