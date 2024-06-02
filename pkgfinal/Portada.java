/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pkgfinal;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.BorderFactory;
import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author alumne-DAM
 * Clase que mostrara la primera pantalla
 */
public class Portada {
/*
 * Metodo que inicia la aplicacion 
 */
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/final";
        JFrame frame = new JFrame();
        frame.setTitle("Tabla");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        frame.setSize(800, 800);

        JButton cliente = new JButton("CLIENTE");
        cliente.addActionListener(new ActionListener() {
            private String[] conexion;

            @Override
            public void actionPerformed(ActionEvent e) {
                VerCliente.showClientScreen(conexion);
            }
        });
        JButton moto = new JButton("MOTO");
        moto.addActionListener(new ActionListener() {
            private String[] conexion;

            @Override
            public void actionPerformed(ActionEvent e) {
                VerMoto.showMotoScreen(conexion);
            }
        });
        JButton venta = new JButton("VENTA");
        venta.addActionListener(new ActionListener() {
            private String[] conexion;

            @Override
            public void actionPerformed(ActionEvent e) {
                VerVenta.showVentaScreen(conexion);
            }
        });

        JButton opiniones = new JButton("OPINIONES");
        opiniones.addActionListener(new ActionListener() {
            private String[] conexion;

            @Override
            public void actionPerformed(ActionEvent e) {
                VerOpiniones.showOpinionesScreen(conexion);
            }
        });

        DefaultTableModel dataModel = new DefaultTableModel();
        JTable table = new JTable(dataModel);
        JScrollPane scrollpane = new JScrollPane(table);

        panel.add(cliente);
        panel.add(moto);
        panel.add(venta);
        panel.add(opiniones);
        frame.add(panel);

        frame.setVisible(true);
    }
}