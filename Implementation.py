import pandas as pd

data_karyawan = {
    'nama' : [
        'Alfian',
        'Vina',
        'Rois',
        'Faiz',
        'Keno'
    ],
    
    'usia' : [
 17,17,17,6,63
    ],
    'posisi' : [
        'Direktur',
        'Manager',
        'Founder',
        'Manager II',
        'Ceo' 
    ]
     
}
df = pd.DataFrame(data_karyawan)


print("=== DATA ASLI DARI DATABASE ===")
print(df)
print("-" * 40)     

su = df[df['usia'] > 17]    
print("=== DATA KARYAWAN DI ATAS 17 TAHUN ===")
print(su)
print("-" * 40)
total_usia = su['usia'].sum()
print(f"\nTotal usia karyawan di atas 17 tahun: {total_usia} tahun")
su.to_csv('karyawan_usia_diatas_17.csv', index=False)
print("\nFile 'karyawan_usia_diatas_17.csv' berhasil dibuat di folder kamu!")

