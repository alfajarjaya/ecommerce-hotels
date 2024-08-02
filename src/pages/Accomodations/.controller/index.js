import Swal from 'sweetalert2';

const postDataPopulerRoom = (data) => {
    fetch('http://127.0.0.1:5000/api/post/populer-room', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                id: data.id,
                title: data.title,
                name: data.name,
                price: data.price
            },
            message: 'success'
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(response => {
        if (response.status === 200) {
            Swal.fire({
                title: 'Success!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Okay'
            }).then(res => {
                res.isConfirmed ? window.location.reload() : window.location.reload();
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    }).catch(error => Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Okay'
    }));
};

const controller = {
    handlePostPopulerRoom: postDataPopulerRoom,
}

export default controller;

