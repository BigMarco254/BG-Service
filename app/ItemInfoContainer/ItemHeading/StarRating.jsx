import React from "react";

var StarRating = ({ rating }) => {
  return (
    <span className="d-inline-block" style={{ color: "#222" }}>
      {[1, 2, 3, 4, 5].map((val, indx) => {
        if (rating >= val) {
          //full star
          return (
            <span
              key={indx}
              style={{ fill: "currentColor", height: "18px", width: "18px", display: "inline-block" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
              </svg>
            </span>
          );
        } else if (rating >= val - 0.5) {
          //half star
          return (
            <span
              key={indx}
              style={{ fill: "currentColor", height: "18px", width: "18px", display: "inline-block" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  style={{
                      fill: "#E1E3DF"
                  }}
                  d="M12.007 16.97l4.21 2.95c.182.12.422.11.592-.027.17-.138.23-.37.15-.574l-1.484-5.33 4.306-3.073c.182-.12.265-.347.203-.557-.065-.21-.258-.352-.477-.352h-5.35l-1.67-5.642c-.06-.215-.257-.363-.48-.363-.225 0-.42.148-.482.363v12.94l.48-.335z"
                ></path>
                <path
                  className="foreground"
                  d="M12 4c-.224 0-.42.15-.48.366l-1.67 5.642H4.5c-.218.002-.41.145-.472.354-.064.208.014.433.193.557l4.307 3.07-1.5 5.33c-.08.202-.02.433.15.57.17.14.41.15.59.03L12 16.98V4z"
                ></path>
              </svg>
            </span>
          );
        } else {
          return (
            <span
              key={indx}
              style={{ fill: "currentColor", height: "18px", width: "18px", display: "inline-block" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 18 18"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z"></path>
              </svg>
            </span>
          );
        }
      })}
    </span>
  );
};

export default StarRating;
