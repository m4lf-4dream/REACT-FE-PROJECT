import pandas as pd

data_mentah = {
    'No_Pelanggan': [101, 102, 103, 104, 105],
    'Nama': ['Rois', 'Budi', 'Siti', 'Amir', 'Megawati'],
    'Status_Langganan': ['Aktif', 'Nonaktif', 'Aktif', 'Aktif', 'Nonaktif'],
    'Total_Belanja': [1500000, 500000, 2300000, 120000, 4500000]
}

df = pd.DataFrame(data_mentah)

print("=== DATA ASLI DARI DATABASE ===")
print(df)
print("-" * 40)

pelanggan_aktif = df[df['Status_Langganan'] == 'Aktif']

print("\n=== DATA PELANGGAN YANG AKTIF ===")
print(pelanggan_aktif)
print("-" * 40)

total_pemasukan = pelanggan_aktif['Total_Belanja'].sum()
print(f"\nTotal uang dari pelanggan aktif: Rp {total_pemasukan:,}")

pelanggan_aktif.to_csv('pelanggan_aktif.csv', index=False)
print("\nFile 'pelanggan_aktif.csv' berhasil dibuat di folder kamu!")