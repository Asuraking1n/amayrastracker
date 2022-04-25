import React from 'react'
const ArchiveCard = () => {
  return (
    <>
        <div className="habit-card-sec">
            <div className="card-profile">
            <img src="https://c.tenor.com/ZxaSEXL0wB4AAAAM/cartoon-monkey.gif" alt="profile" />
            </div>
            <div className="card-user-name">
            <span>Wake early</span>
            </div>
            <div className="card-btn-sec">
            <button>Remove from Archive</button>
            <button>Add to Label</button>
            </div>
        </div>
    </>
  )
}

export default ArchiveCard