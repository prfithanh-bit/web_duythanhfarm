const SUPABASE_URL = 'https://mifhroctjjwsaqxgsets.supabase.co';
const SUPABASE_KEY = 'sb_publishable_f-qYMhsbqObexaXiJyvWig_SAowI95d';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function guiDuLieu() {
    const ten = document.getElementById('ten').value;
    const email = document.getElementById('email').value;
    const nd = document.getElementById('tinnhan').value;
    const status = document.getElementById('status');

    if(!ten || !email) { alert("Nhập đủ tên và email nhé!"); return; }

    const { error } = await _supabase.from('lienhe').insert([{ ten_khach: ten, email: email, noi_dung: nd }]);

    if (error) {
        status.innerText = "Lỗi: " + error.message;
        status.style.color = "red";
    } else {
        status.innerText = "✅ Đã gửi thành công vào Supabase!";
        status.style.color = "green";
        document.getElementById('ten').value = '';
        document.getElementById('email').value = '';
        document.getElementById('tinnhan').value = '';
    }
}